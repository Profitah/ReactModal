// Modal.jsx
import React, { useState } from 'react';
import './App.css';

// 모달 컴포넌트 정의
const Modal = () => {
  // 모달의 열림/닫힘 상태를 관리하는 상태 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // div를 클릭했을 때 모달을 열기 위한 이벤트 핸들러
  const handleDivClick = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 이벤트 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Wrap">
      {/* 내용을 감싸는 div */}
      <div className="Content">
        {/* 모달을 열기 위한 div */}
        <div className="div1" onClick={handleDivClick}>
          {/* 세로 가운데 정렬을 위한 queen 클래스 적용 */}
          <p className='queen'>이 div를 클릭하면 modal 창이 뜹니다.</p>
        </div>

        {/* 버튼을 클릭하여 모달을 열 수 있는 버튼 */}
        <button className="openModalButton" onClick={handleDivClick}>
          {/* 세로 가운데 정렬을 위한 quene 클래스 적용 */}
          <p className='quene'>Open Modal</p>
        </button>
      </div>

      {/* 모달 영역을 감싸는 div */}
      <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
        {/* 모달 내용 */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* 모달 닫기 버튼 */}
          <p className="closeModalButton" onClick={closeModal}>
            x
          </p>
          {/* 세로 가운데 정렬을 위한 queen 클래스 적용 */}
          <p className='queen'>Is this the real life</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
