import React from "react";

const Pricing = () => {
    return (
        <section className="bg-zinc-950">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Escolha um <strong className="text-red-600">PLANO</strong>
                    </h2> 
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Ideal para entusiastas de Automobilismo! <br /> Escolha plano para uma experiência mais completa e única!
                    </p>
                </div>

                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* Pricing Card */}
                    <PricingCard
                        title="LOW CHARGE"
                        price="R$ 0"
                        description="Ideal para entusiastas de Automobilismo!"
                        features={[
                            "Monte sua Equipe",
                            "Mercado fecha 1 hora antes da largada",
                            "Crie até 1 Club",
                        ]}
                    />
                    <PricingCard
                        title="HIGH VOLTAGE"
                        price="R$ 29,90"
                        description="Ideal para entusiastas de Automobilismo!"
                        features={[
                            "Monte sua Equipe",
                            "Jogue sem Anúncios",
                            "Mercado fecha 30 minutos antes da largada",
                            "Crie até 3 Club's",
                            "Acesse o TrackVision",
                        ]}
                    />
                    <PricingCard
                        title="MAX POWER"
                        price="R$ 49,90"
                        description="Ideal para entusiastas de Automobilismo!"
                        features={[
                            "Monte sua Equipe",
                            "Jogue sem Anúncios",
                            "Mercado fecha 1 minuto antes da largada",
                            "Crie até 10 Club's",
                            "Acesse o TrackVision",
                            "Bonificação de pontuação",
                            "Acesse a transmissão Ao Vivo de cada circuito",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ title, price, description, features }) => {

    const title_color = {
        "LOW CHARGE":"red-600",
        "HIGH VOLTAGE": "yellow-400",
        "MAX POWER": "green-500"
    }

    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow dark:border-gray-800 xl:p-8 dark:bg-zinc-900 dark:text-white">
            <h3 className={`mb-4 text-2xl font-semibold text-${title_color[title]}`}>{title}</h3>
            <p className="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                {description}
            </p>
            <div className="flex justify-center items-baseline my-8 ">
                <span className="mr-2 text-5xl font-extrabold">{price}</span>   
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ease-in-out">
                Garantir Acesso
            </button>
        </div>
    );
};

export default Pricing;
