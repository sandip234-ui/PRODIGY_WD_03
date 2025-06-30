function Box({ value, onClick, index }) {
  const bgColors = ['bg-[#CCE6F4]', 'bg-[#CED3DC]'];
  const bg = bgColors[index % 2];

  return (
    <button
      onClick={onClick}
      className={`w-[20vmin] h-[20vmin] border-4 border-white text-[8vmin] rounded-2xl ${bg} shadow-2xl text-[#A31621]`}
      disabled={value !== ''}
    >
      {value}
    </button>
  );
}

export default Box;