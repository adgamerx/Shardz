import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import { SideBar } from '../Components/SideBar'
import { Drive } from '../Components/Drive'
import { BrowserView, MobileView } from 'react-device-detect'
import NavBarMobile from '../Components/NavBarMobile'

export const Drives = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem('accessToken')) {
            navigate("/login");
        }
    });
    let driveDetails = {};

    let storedDriveDetails = sessionStorage.getItem("driveDetails");

    if (storedDriveDetails && storedDriveDetails.length !== 0) {
        try {
            storedDriveDetails = JSON.parse(storedDriveDetails);
            console.log(driveDetails);
        } catch (error) {
            console.error("Error parsing driveDetails JSON:", error);
        }
    }
    if (sessionStorage.getItem('accessToken')) {
        return (
            <>
                <header>
                    <BrowserView><NavBar pageTitle="Drives" />
                    </BrowserView>
                    <MobileView>
                        <NavBarMobile pageTitle="Drives" />

                    </MobileView>
                </header>
                <div className='flex lg:flex-row'><BrowserView><SideBar /></BrowserView>
                    <div className="grid grid-flow-col lg:gap-4 gap-2 grid-cols-4">
                        {(sessionStorage.getItem("addedDrives")).split(",").map((drive, index) => {
                            const driveObjects = storedDriveDetails.match(/\{([^}]+)\}/g).map(obj => JSON.parse(obj));
                            console.log()
                            return <Drive name={drive} /> 

                        })}
                    </div>
                </div>
            </>
        )
    }
}
