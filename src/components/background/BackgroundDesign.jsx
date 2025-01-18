import React from 'react';

export default function BackgroundDesign() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 왼쪽 상단 베이지색 물결 */}
      <svg
        className="absolute left-0 top-0"
        width="266"
        height="409"
        viewBox="0 0 266 409"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M55.4966 -40.2864C112.343 -47.127 175.196 -43.6882 216.32 1.5465C257.87 47.251 276.445 121.659 260.097 184.769C245.759 240.116 179.67 244.648 143.025 284.488C108.23 322.317 102.646 396.389 55.4966 407.209C5.82495 418.608 -38.483 373.357 -76.1881 334.794C-116.718 293.343 -162.329 246.818 -161.998 184.769C-161.669 122.896 -114.801 78.1539 -74.5988 36.554C-37.0098 -2.34171 4.99826 -34.2097 55.4966 -40.2864Z"
          fill="#DCC8AB"
        />
      </svg>

      {/* 오른쪽 상단 민트색 물결 */}
      <svg
        className="absolute right-0 top-0"
        width="294"
        height="384"
        viewBox="0 0 294 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M185.604 63.312C262.839 48.7197 341.957 -32.9474 407.437 14.8326C473.261 62.8639 454.786 173.799 456.87 261.253C459.043 352.397 479.599 458.974 419.505 521.078C359.978 582.595 265.806 556.411 185.604 541.59C121.468 529.738 55.7675 506.085 18.4276 446.959C-14.8996 394.186 6.80571 325.686 8.56374 261.253C10.2284 200.242 -10.4648 129.772 28.2632 86.4721C67.0272 43.132 131.384 73.5561 185.604 63.312Z"
          fill="#B5C7B5"
        />
      </svg>

      {/* 작은 원형 장식들 */}
      <div className="absolute right-20 top-40 flex space-x-4">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.5" cy="12.5" r="11.5" fill="#ADD8E6" stroke="white" strokeWidth="2" />
        </svg>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14" fill="#ADC5CD" stroke="white" strokeWidth="2" />
        </svg>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14" fill="#99D1C2" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* 기타 장식적 요소들... */}
    </div>
  );
} 