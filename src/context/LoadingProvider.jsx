import { createContext, useContext, useState } from "react";

export const Loading = createContext(null);

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <Loading.Provider value={{ loading, setLoading }}>
            {children}
        </Loading.Provider>
    );
};

export default LoadingProvider;

export const useLoading = () => {
    if (!useContext(Loading)) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return useContext(Loading);
}
