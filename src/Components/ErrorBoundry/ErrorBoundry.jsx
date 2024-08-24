import { ErrorBoundary } from "react-error-boundary";


function CustomErrorBoundryUI ({error, resetErrorBoundry}){
    return(  


    <div className="flex items-center justify-center h-[100rem]">
         <div role="alert" className="alert alert-error">
            <p>Something wents wrong</p>
              <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundry}>Try Again</button>
         </div>
 
    </div>
      
    )
}
export default function CustomErrorBoundry({children}) {
    return(
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundryUI}
            onReset ={() => window.location.reload()}
         >
          
          {children}
 
        </ErrorBoundary>
    )
}