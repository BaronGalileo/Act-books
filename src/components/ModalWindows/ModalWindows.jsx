import React from 'react';
import './ModalWindows.css'; // Подключаем стили для модалки
import { ButtonBallCandy } from '../Button/ButtonBallCandy';

export const ModalWindows = ({ onClose, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>{content}</div>
        <div><ButtonBallCandy onClick={onClose} className="modal-button-admin">Закрыть</ButtonBallCandy></div>
      </div>
        
    </div>
  );
};
