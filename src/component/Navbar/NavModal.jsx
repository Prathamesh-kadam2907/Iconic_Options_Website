const NavModal = ({ children, onClose }) => {
  return (
    <div
      className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl h-[60vh] bg-black/30 backdrop-blur-sm z-50"
      onMouseLeave={onClose}   
    >
      <div
        className="w-full h-full bg-white rounded-2xl shadow-2xl border"
        onMouseEnter={(e) => e.stopPropagation()} 
      >
        <div className="h-full overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavModal;
