"use client";

import { IconType } from 'react-icons';

interface ButtonProps {
	disabled?: boolean;
	icon?: IconType;
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	outline?: boolean;
	small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	disabled,
	icon: Icon,
	label,
	onClick,
	outline,
	small,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
                ${outline ? "border-black" : "border-slate-50"}
				bg-slate-50
                ${small ? "border-[1px]" : "border-2"}
                ${small ? "font-light" : "font-semibold"}
                ${small ? "py-1" : "py-3"}
                ${small ? "text-sm" : "text-md"}
                ${outline ? "text-black" : "text-zinc-700"}
                disable:opacity-70
                disabled:cursor-not-allowed
                hover:opacity-80
                relative
				drop-shadow-md
                rounded-lg
                transition
                w-full
            `}
		>
			{Icon && (
				<Icon
					size={24}
					className="
                        absolute
                        left-4
                        top-3
                    "
				/>
			)}
			{label}
		</button>
	);
};

export default Button;
