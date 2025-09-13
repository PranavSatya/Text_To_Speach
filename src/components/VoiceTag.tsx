interface VoiceTagProps {
  name: string;
  description: string;
  color: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function VoiceTag({ name, description, color, isSelected = false, onClick }: VoiceTagProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="w-2 h-2 rounded-full bg-white/80"></div>
      <span className="text-gray-800">{name}</span>
      <span className="text-gray-600 text-xs">{description}</span>
    </button>
  );
}