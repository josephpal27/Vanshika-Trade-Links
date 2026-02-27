import { PuffLoader   } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <>
            <div style={{
                height: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <PuffLoader  
                    color="#000"
                    size={60}
                />
            </div>
        </>
    )
}

export default LoadingSpinner
