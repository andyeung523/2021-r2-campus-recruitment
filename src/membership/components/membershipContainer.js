import { getMembership } from '../dao/membershipDao';
import { useState, useEffect } from 'react';
import '../style/membershipStyle.css';
import { MembershipItem } from './membershipItem';

export const MembershipContainer = () => {
    //React useState hook is used for state management. Utilzes setter setMembership to update product state
    const [membership, setMembership] = useState([]);

    const [planCSS, setPlanCSS] = useState("plan-item-dismiss");

    //React useEffect hook with empty array as second argument will run below code only once 
    useEffect(() => {
        getMembership().then(res => {
            setMembership(res);
            setTimeout(function () {
                setPlanCSS("plan-item")
            }, 700);
        });
    }, [])

   

    const handleGradeClick = (grade) => {
        setPlanCSS("plan-item-dismiss")

        setTimeout(function () {
            getMembership(grade).then(res => {
                setMembership(res);
            })
        }, 500);


        setTimeout(function () {
            setPlanCSS("plan-item")
        }, 700);
        

    }
    return (
        <>
            <header className="header">
                <div className="text-center">
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick()}>ALL</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("SILvER")}>Sliver</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("GoLD")}>Gold</span>
                    <span className="h2 col-sm-3 font-weight-normal grade" onClick={() => handleGradeClick("DIAmOND")}>Diamond</span>
                </div>
            </header>
            {
                membership && membership.length > 0
                    ?
                    <div className='align-grid'>
                        <div className='grid'>
                            {

                                membership.map(m => {
                                    return (
                                        <div opacity className={planCSS}>
                                            <MembershipItem
                                                id={m.id}
                                                name={m.name}
                                                description={m.description}
                                                price={m.price}
                                            />
                                        </div>
                                    );
                                })

                            }
                        </div>
                    </div>
                    :
                    <div className="mt-5 text-center">No membership plan for this grade</div>

            }



        </>
    )

}
