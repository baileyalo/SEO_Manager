import React from "react";

const LoadingSpinner: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => {
    return (
        <div className={`flex justify-center items-center ${className}`}>
            <div
                className="animate-spin rounded-full border-4 border-t-reprisk-yellow border-reprisk-blue"
                style={{ width: size, height: size }}
            />
        </div>
    );
};

export default LoadingSpinner;