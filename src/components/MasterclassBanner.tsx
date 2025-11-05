import React, { useState } from 'react';
import { Sparkles, Clock, Users, ArrowRight } from 'lucide-react';
import MasterclassModal from './MasterclassModal';

const MasterclassBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="py-12 bg-gradient-to-r from-purple-600 via-orange-600 to-pink-600">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white/95 backdrop-blur rounded-2xl p-8 md:p-10 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles className="w-6 h-6 text-orange-600" />
                                    <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                                        Новинка
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                    Мастер-класс: Claude Code
                                </h3>
                                <p className="text-gray-700 mb-4 text-lg">
                                    Агентная автоматизация разработки — интенсивный 2-часовой онлайн мастер-класс
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-5 h-5 text-orange-600" />
                                        <span>2 часа (онлайн)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Users className="w-5 h-5 text-orange-600" />
                                        <span>Для разработчиков</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
                                >
                                    Подробнее
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MasterclassModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default MasterclassBanner;
