import React from 'react';
import { X, Clock, Users, Monitor, CheckCircle } from 'lucide-react';

interface MasterclassModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MasterclassModal: React.FC<MasterclassModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                        <X className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        {/* Header */}
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Мастер-класс: Claude Code
                            </h2>
                            <p className="text-xl text-gray-600 mb-4">
                                Агентная автоматизация разработки
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Clock className="w-5 h-5 text-orange-600" />
                                    <span>2 часа (онлайн)</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Users className="w-5 h-5 text-orange-600" />
                                    <span>Для технических специалистов</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Monitor className="w-5 h-5 text-orange-600" />
                                    <span>Онлайн формат</span>
                                </div>
                            </div>
                        </div>

                        {/* О мастер-классе */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">О мастер-классе</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Интенсивный двухчасовой онлайн мастер-класс, посвященный Claude Code - революционному инструменту агентной автоматизации разработки. Участники получат практические навыки работы с AI-агентом для автоматизации задач разработки и познакомятся с основными возможностями инструмента.
                            </p>
                        </section>

                        {/* Целевая аудитория */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Целевая аудитория</h3>
                            <ul className="space-y-2">
                                {['Разработчики (фронтенд, бэкенд, full-stack)', 'DevOps инженеры', 'Технические лидеры'].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Программа по времени */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Программа по времени</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-orange-600 pl-4 py-2">
                                    <div className="font-semibold text-gray-900 mb-2">10:00-10:50 — Блок 1: Введение и основы</div>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• От копилотов к агентам: эволюция AI-инструментов</li>
                                        <li>• Архитектура и возможности Claude Code</li>
                                        <li>• Быстрая настройка и первые команды</li>
                                        <li>• Демо: создание простого скрипта</li>
                                    </ul>
                                </div>
                                <div className="border-l-4 border-gray-300 pl-4 py-2">
                                    <div className="font-semibold text-gray-900">10:50-11:00 — Перерыв</div>
                                </div>
                                <div className="border-l-4 border-orange-600 pl-4 py-2">
                                    <div className="font-semibold text-gray-900 mb-2">11:00-12:00 — Блок 2: Практические сценарии</div>
                                    <ul className="text-gray-700 text-sm space-y-1">
                                        <li>• Разработка API endpoint с нуля</li>
                                        <li>• Отладка и исправление багов</li>
                                        <li>• Автоматизация в CI/CD</li>
                                        <li>• Лучшие практики и безопасность</li>
                                        <li>• Q&A и следующие шаги</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Детальная программа */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Детальная программа</h3>

                            <div className="space-y-6">
                                {/* Блок 1 */}
                                <div className="bg-orange-50 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        Блок 1: Введение и основы (10:00 - 10:50)
                                    </h4>

                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">От копилотов к агентам (15 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Эволюция AI-ассистентов: GitHub Copilot → Cursor → Claude Code</li>
                                                <li>• Ключевые отличия агентного подхода</li>
                                                <li>• Концепция делегирования задач AI</li>
                                                <li>• Архитектура Claude Code: контекст, автономность, Git интеграция</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Быстрый старт (20 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Установка Claude Code CLI и расширений для IDE</li>
                                                <li>• Настройка API ключей</li>
                                                <li>• Основные команды и интерфейс</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Первая практика (15 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Демонстрация: создание базового скрипта с помощью Claude Code</li>
                                                <li>• Разбор результата и возможностей инструмента</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Блок 2 */}
                                <div className="bg-blue-50 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                        Блок 2: Практические сценарии (11:00 - 12:00)
                                    </h4>

                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Разработка функциональности (20 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Практика: разработка REST API endpoint с аутентификацией</li>
                                                <li>• Работа с естественным языком для описания задачи</li>
                                                <li>• Автоматическая генерация тестов</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Отладка и рефакторинг (15 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Демонстрация: поиск и исправление бага</li>
                                                <li>• Анализ трассировки ошибок</li>
                                                <li>• Рефакторинг устаревшего кода</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Автоматизация и CI/CD (15 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Интеграция Claude Code в GitHub Actions</li>
                                                <li>• Pre-commit хуки и автоматическое исправление</li>
                                                <li>• Пакетная обработка задач</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Безопасность и лучшие практики (10 минут)</h5>
                                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                                <li>• Ревью AI-сгенерированного кода</li>
                                                <li>• Управление секретами и контроль доступа</li>
                                                <li>• Критерии приемки и процесс тестирования</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Результаты обучения */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Результаты обучения</h3>
                            <p className="text-gray-700 mb-4">По окончании мастер-класса участники смогут:</p>
                            <ul className="space-y-2">
                                {[
                                    'Установить и настроить Claude Code для работы',
                                    'Использовать базовые возможности инструмента для автоматизации задач',
                                    'Делегировать простые задачи разработки AI-агенту',
                                    'Понимать, где Claude Code наиболее эффективен',
                                    'Применять лучшие практики при работе с AI-инструментами'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Технические требования */}
                        <section className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Технические требования</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Предварительная подготовка</h4>
                                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                        <li>• Базовый опыт программирования (любой язык)</li>
                                        <li>• Знакомство с командной строкой</li>
                                        <li>• Базовые знания Git (опционально)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Необходимое ПО</h4>
                                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                        <li>• Node.js 18+ (обязательно)</li>
                                        <li>• VS Code или JetBrains IDE</li>
                                        <li>• Git 2.x</li>
                                        <li>• Anthropic API key (бесплатный trial)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Технические требования</h4>
                                    <ul className="text-gray-700 text-sm space-y-1 ml-4">
                                        <li>• Ноутбук с минимум 8GB RAM</li>
                                        <li>• Стабильное интернет-соединение</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Контакты и CTA */}
                        <section className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-6 border border-orange-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Контактная информация</h3>
                            <div className="space-y-2 mb-6">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Email:</span>{' '}
                                    <a href="mailto:vadim.berkovich@gmail.com" className="text-orange-700 hover:underline">
                                        vadim.berkovich@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">WhatsApp:</span>{' '}
                                    <a href="https://wa.me/996508120130" className="text-orange-700 hover:underline">
                                        +996 508 120 130
                                    </a>
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 mb-4 italic">
                                Программа может быть адаптирована под специфические потребности вашей организации
                            </p>
                            <a
                                href="#register"
                                onClick={onClose}
                                className="block w-full text-center px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all shadow-lg"
                            >
                                Записаться на мастер-класс
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterclassModal;
