"use client";

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div
			onClick={onClick}
			className="
                font-semibold
                hover:bg-neutral-100
                px-4
                py-3
                transition
            "
		>
			{label}
		</div>
	);
};

export default MenuItem;
