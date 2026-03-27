import React, { useState } from 'react';
import { scoreService } from '../../services/scoreService';

const HighScoreForm = ({ score, onScoreSubmitted }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isDone, setIsDone] = useState(false);

  const nameRegex = /^[a-zA-Z0-9 _-]{2,15}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!nameRegex.test(name)) {
      setError('Namnet måste vara 2-15 tecken (inga specialtecken)');
      return;
    }

    setIsSubmitting(true);

    try {
      // call service
      await scoreService.saveScore(name, score);

      setIsDone(true);
      if (onScoreSubmitted) onScoreSubmitted(); 
      
    } catch (err) {
      // if error from service
      setError(err.message || 'Kunde inte spara poängen.');
      console.error("Form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isDone) {
    return (
      <div className="form-success">
        <p>Snyggt, {name}! Ditt resultat är sparat.</p>
      </div>
    );
  }

  return (
    <div className="score-form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="playerName">REGISTRERA DIN SCORE:</label>
          <input
            id="playerName"
            type="text"
            placeholder="Ditt Alias..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            autoComplete="off"
            maxLength={15}
          />
        </div>
        
        {error && <p className="error-message">{error}</p>}

        <button 
          type="submit" 
          className="game-button" 
          disabled={isSubmitting || !name}
        >
          {isSubmitting ? 'SPARAR...' : 'SPARA RESULTAT'}
        </button>
      </form>
    </div>
  );
};

export default HighScoreForm;