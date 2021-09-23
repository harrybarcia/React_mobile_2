import React, { useState } from 'react';

export default function Cam  ()  {
    const [isPermission, setIsPermission]= useState(false);

    useEffect(() => {
        // console.log("test")
        // la fonction return s'exe quand le composant est sur le point d'être démonté
        // return () => {
            
        // }
    }, [isPermission]) // 
    return (
        <div>
            
        </div>
    );
};

