<template>
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
  </template>
  
  <style scoped>
  .loader-wrapper {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000; 
    overflow: hidden; 
  }
  
  .loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #24ad3b;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>