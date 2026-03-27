import React, { useRef, useState, useEffect, useCallback } from 'react';
import './PixelGame.css';
import HighScoreForm from './HighScoreForm';
import { scoreService } from '../../services/scoreService';

// game config
const GAME_DURATION = 30; // time sec
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 700;
const PIXEL_SIZE = 4; 


// level manager
const DIFFICULTY_CURVE = [
  { time: 0,  spawnRate: 15, radius: 45, speed: 0.8,   label: "Chill." },
  { time: 10, spawnRate: 35, radius: 35, speed: 1.5, label: "Det hettar till." },
  { time: 20, spawnRate: 60, radius: 25, speed: 2.5, label: "KAOS!" },
];

function PixelGame() {

  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);      // list with pixels
  const mousePosRef = useRef({ x: 0, y: 0 }); // pointer position relative to canvas
  const animationFrameIdRef = useRef(); // to stop loop
  const internalScoreRef = useRef(0); 
  const currentDifficultyRef = useRef(DIFFICULTY_CURVE[0]); // dufficulty config

  const prevScoreRef = useRef(0);
  const penaltyFlashRef = useRef(0);


  const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING, ENDED
  const [score, setScore] = useState(0);             
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [currentLevelLabel, setCurrentLevelLabel] = useState(DIFFICULTY_CURVE[0].label);


 // leaderboard state
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(false);

  // get from azure
  const loadLeaderboard = useCallback(async () => {
    setIsLoadingLeaderboard(true);
    try {
      const data = await scoreService.getTopScores();
      setLeaderboard(data);
    } catch (err) {
      console.error("Kunde inte hämta leaderboard:", err);
    } finally {
      setIsLoadingLeaderboard(false);
    }
  }, []);

 
  useEffect(() => {
    loadLeaderboard();
  }, [loadLeaderboard]);


  // create pixel
  const spawnPixel = useCallback(() => {
  const config = currentDifficultyRef.current;
  
  //penalty pixel
  const isPenaltyPixel = Math.random() < 0.05; // 15% 

  // pixel colors
  const goodColors = ['#646cff', '#ffffff']; 
  const penaltyColor = '#ff0000';

  pixelsRef.current.push({
    x: Math.random() * CANVAS_WIDTH,
    y: Math.random() * CANVAS_HEIGHT,
    color: isPenaltyPixel ? penaltyColor : goodColors[Math.floor(Math.random() * goodColors.length)],
    // speed
    vx: (Math.random() - 0.5) * config.speed, 
    vy: (Math.random() - 0.5) * config.speed,
    
    isPenalty: isPenaltyPixel,
  });
}, []);

  // game engine (requestAnimationFrame)
  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || gameState !== 'PLAYING') return;

    const ctx = canvas.getContext('2d');
    const config = currentDifficultyRef.current;

    // clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // spawn new pixels 
    if (Math.random() < config.spawnRate / 60) {
      spawnPixel();
    }

    // cleaning logic
    pixelsRef.current = pixelsRef.current.filter(p => {
      // move pixel
      p.x += p.vx;
      p.y += p.vy;

      // bounce agains walls
      if (p.x < 0 || p.x > CANVAS_WIDTH) p.vx *= -1;
      if (p.y < 0 || p.y > CANVAS_HEIGHT) p.vy *= -1;

      // collition control (Pythagoras)
      const dx = p.x - mousePosRef.current.x;
      const dy = p.y - mousePosRef.current.y;

      const distanceSquared = dx * dx + dy * dy;
      const radiusSquared = config.radius * config.radius;

      // if pixel is inside the radius -> remove
      if (distanceSquared < radiusSquared) {
       
        if (p.isPenalty) {
          //remove score for penalty pixel and flash red
          internalScoreRef.current -= 5;
          penaltyFlashRef.current = 30;
        } else {
          // add point for other pixels
          internalScoreRef.current += 1;
        }

        return false; 
      }

    
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE);
      return true; // keep in list
    });

    // special pointer (cleaner)
    ctx.beginPath();
    ctx.arc(mousePosRef.current.x, mousePosRef.current.y, config.radius, 0, Math.PI * 2);
    
  
    let activeColor = '#db976d'; 

    if (penaltyFlashRef.current > 0) {
      activeColor = '#ff0000';      
      penaltyFlashRef.current -= 1; 
    }

    
    ctx.strokeStyle = activeColor; 
    ctx.lineWidth = 2;
    
      //glow
    ctx.shadowColor = activeColor;
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;
    // request next frame
    animationFrameIdRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, spawnPixel]);


  // game state handler

  const startGame = () => {

    //clear all pixels 
    pixelsRef.current = [];
    internalScoreRef.current = 0;
    mousePosRef.current = { x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2 }; // starts in the center
    currentDifficultyRef.current = DIFFICULTY_CURVE[0];
    
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setCurrentLevelLabel(DIFFICULTY_CURVE[0].label);
    
    // start game loop
    setGameState('PLAYING');
  };

  const endGame = useCallback(() => {

    setGameState('ENDED');
    setScore(internalScoreRef.current);
    
    cancelAnimationFrame(animationFrameIdRef.current);

     // load leadeboard when game ended
     loadLeaderboard();
  }, [loadLeaderboard]);
 

 
   

  // effects (Lifecycle) 

  // handle game loop

  useEffect(() => {
    if (gameState === 'PLAYING') {
      animationFrameIdRef.current = requestAnimationFrame(gameLoop);
    }
    // Cleanup-funktion 
    return () => cancelAnimationFrame(animationFrameIdRef.current);
  }, [gameState, gameLoop]);

  // timer and level manager

  useEffect(() => {
    let timerInterval;
    if (gameState === 'PLAYING' && timeLeft > 0) {
      timerInterval = setInterval(() => {
        
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame(); // times up
            return 0;
          }
          const newTime = prev - 1;

          // level up 
          const elapsed = GAME_DURATION - newTime;
         
          const nextLevel = [...DIFFICULTY_CURVE]
            .reverse()
            .find(level => elapsed >= level.time);
          
          if(nextLevel && nextLevel.time !== currentDifficultyRef.current.time) {
            currentDifficultyRef.current = nextLevel;
            setCurrentLevelLabel(nextLevel.label);
            console.log(`Level Up: ${nextLevel.label}`);
          }

          return newTime;
        });
        
        
        setScore(internalScoreRef.current);

      }, 1000);
    }
    
    return () => clearInterval(timerInterval);
  }, [gameState, timeLeft, endGame]);


  // pointer position relative to the canvas
  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // UI
  return (
    <div className="pixel-game-wrapper">
      
      <div className="game-header">

        <h1 className="game-title">CAPTURE THE PIXELS</h1>
        <div className="game-stats">
          <span>TID: {timeLeft}s</span>
          <span>POÄNG: {score}</span>
          <span style={{color: '#646cff'}}>NIVÅ: {currentLevelLabel}</span>
        </div>
      </div>

      <div className="canvas-container">

        <canvas 
          ref={canvasRef} 
          width={CANVAS_WIDTH} 
          height={CANVAS_HEIGHT}
          className={`game-canvas ${gameState !== 'PLAYING' ? 'blur' : ''}`}
          onMouseMove={handleMouseMove}
        />


        {/* Menu*/}
        {gameState === 'IDLE' && (
          <div className="menu-overlay">
            <h1>Fånga pixlarna. Bemästra kaoset.</h1>
            <h2>Undvik de röda som ger dig minuspoäng..</h2>

               <div className="menu-buttons">
                   <button className="game-button" onClick={startGame}>STARTA</button>
                   <a href="/" className="back-link">← Tillbaka</a>
                 </div>
               </div>
        )}

       

         {/* Game over menu*/}
        {gameState === 'ENDED' && (
          <div className="menu-overlay scrollable">
            
            <p>Du samlade ihop:</p>
            <h1>{score} pixlar</h1>
            
            <div className="score-submission">
              
              <HighScoreForm 
                score={score} 
                onScoreSubmitted={loadLeaderboard} 
              />

              {/* Leaderboarden */}
              <div className="leaderboard-container">
                <h3>TOPP 5 PIXELFÅNGARE</h3>
                
                {isLoadingLeaderboard ? (
                  <p className="loading-text">Hämtar hjältar...</p>
                ) : (
                  <ul className="leaderboard-list">
                    {leaderboard.length > 0 ? (
                      leaderboard.map((entry, index) => (
                        <li key={entry.id || index} className="leaderboard-item">
                          <span className="rank">#{index + 1} </span>
                          <span className="name">{entry.playerName} </span>
                          <span className="points">{entry.score} p</span>
                        </li>
                      ))
                    ) : (
                      <p>Inga poäng än. Bli den första!</p>
                    )}
                  </ul>
                )}
                </div>
                  <div className="menu-buttons">
                    <button className="game-button" onClick={startGame}>SPELA IGEN</button>
                     <a href="/" className="back-link">← Avsluta spel</a>
                    </div>
                 </div>

               </div>
        )}

      </div> 
    </div>
  );
}

export default PixelGame;