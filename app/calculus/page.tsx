"use client";

import integral from "@/app/api/backend/integral";

export default function Calculus() {
    const onIntegralClick = (e: any) => {
       console.log(integral("sdfsf"));
    }
    return (
        <div>
            <button onClick={onIntegralClick}>click</button>
        </div>
    );
}
