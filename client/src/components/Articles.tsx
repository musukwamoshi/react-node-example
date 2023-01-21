import React, { useEffect, useState } from 'react';
import { post } from '../utils/api';

export function Article() {
    const [testValue, setTestValue] = useState("Hello From dashboard!");

    const fetchFromTest = async (): Promise<any> => {

        const response = await post('/test', {});
        setTestValue(`${response.data}`)

    }

    useEffect(() => {
        fetchFromTest();
    })

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                        {testValue}
                    </div>
                </div>

            </div>
        </>
    );
}

