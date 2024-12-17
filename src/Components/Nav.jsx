import React, { useEffect, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaCloud } from "react-icons/fa";


const Nav = (props) => {


   
    return (
        <div className='flex justify-between items-center gap-5  p-3'>
            <div>
                <CiMenuBurger />
            </div>

            <div>
                <h1 className='flex justify-center items-center gap-1'> LUCIDEUS <FaCloud />
                </h1>

            </div>

            <div>
                <div>
                    
                    {props.data && props.data.location ? (
                        <p>{props.data.location.localtime}</p>
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>

            </div>

        </div>
    )
}

export default Nav