import { Body1 } from '@fluentui/react-components';
import { Card, CardHeader } from '@fluentui/react-components/unstable';
import "../css/mycard.css";


function MyCard(props) {

    return (
        <div className={`mycard ${props.modeClass}mycard`}>
            <Card>
                <CardHeader
                    header={
                        <Body1>
                            <h1 className='titleproject'><a href={props.link}>{props.title}</a></h1>
                        </Body1>
                    }
                />
                <div className='row'>
                    <div className='imgandtextproject'>
                        <div className='col'>
                            <a href={props.youtubeLink}><img className='projectimg'
                                src={props.img}
                                alt={props.title}
                            /></a>
                        </div>

                        <div className='projecttext'>
                            <div className='col'>
                                <span>
                                    {props.description}

                                </span>
                            </div>

                        </div>

                    </div>

                </div>
                {/* <table>
                            <tr>
                                <th>
                                    <img className='projectimg'
                                        src={props.img}
                                        alt={props.title}
                                    />                        </th>
                                <th>
                                    <div className='projecttext'>
                                        <span>
                                            {props.description}

                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </table> */}



            </Card>

        </div>


    );
}

export default MyCard;




