import React from 'react';
import { RowDivisionProps } from './interfaces';
import { Eczar } from 'next/font/google';

const eczarLight = Eczar({
    weight: ['500'],
    subsets: ['latin'],
});

export default class RowDivisions extends React.Component<RowDivisionProps> {
    render() {
        const cardsData = this.props.sections;
        return (
            <div className="max-w-7xl mx-auto p-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {cardsData.map((card, idx) => (
                        <div
                            key={idx}
                            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-64 h-64 flex flex-col bg-white text-black"
                        >
                            <div className="p-6 flex flex-col h-full">
                                {card.icon && (
                                    <div className="flex justify-center mb-4">
                                        <div className="rounded-full p-3 text-white">
                                            {card.icon}
                                        </div>
                                    </div>
                                )}

                                <h2 className={`${eczarLight.className} text-xl font-semibold mb-3 text-center`}>
                                    {card.title}
                                </h2>

                                <p className={`${eczarLight.className} text-center leading-relaxed text-sm flex-grow`}>
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
