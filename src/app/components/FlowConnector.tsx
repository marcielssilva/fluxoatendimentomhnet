interface FlowConnectorProps {
  vertical?: boolean;
  label?: string;
  dashed?: boolean;
}

export function FlowConnector({ vertical = false, label, dashed = false }: FlowConnectorProps) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center justify-center py-2">
        <div className={`w-0.5 h-12 ${dashed ? 'border-l-2 border-dashed border-gray-400' : 'bg-gray-400'}`} />
        {label && (
          <span className="text-xs text-gray-600 bg-white px-2 -my-2 z-10">{label}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4">
      <div className={`h-0.5 w-12 ${dashed ? 'border-t-2 border-dashed border-gray-400' : 'bg-gray-400'}`} />
      {label && (
        <span className="text-xs text-gray-600 bg-white px-2 absolute">{label}</span>
      )}
    </div>
  );
}
