import PropTypes from 'prop-types';
import Line from '../Atom/Line';
import styles from './dribbble.module.css';
const Dribbble = ({dribbbleData}) => {
   
    return(
        <div>
            <div className={styles.wrapTitle}>
                <h3 className={styles.title}>Portfolio</h3>
                <Line />
            </div>
       
            <div className={styles.content}>
                {dribbbleData.map((data, index)=> (
                
                        
                        <div key={index}>
                        <div className={styles.wrapContent}>
                            
                                <img src={data.images.normal} alt="Images" className={styles.imagesDribbble}/>
                                <h1 className={styles.title}>{data.title}</h1>
                                <div className={styles.tags}>{data.tags}
                                </div>
                            </div>
                        </div>
                
                ))}
            </div>
        </div>
    )
}

Dribbble.propTypes = {
    dribbbleData: PropTypes.array
}

export default Dribbble;