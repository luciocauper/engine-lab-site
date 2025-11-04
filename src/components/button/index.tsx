interface ButtonProps {
    text: string;
}

export function Button({ text }: ButtonProps) {
    return (
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            {text}
        </button>
    );
}
