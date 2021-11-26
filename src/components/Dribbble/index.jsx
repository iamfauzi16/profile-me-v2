import PropTypes from 'prop-types';

import styles from './dribbble.module.css';
const Dribbble = ({dribbbleData}) => {
   
    return(

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
    )
}

Dribbble.propTypes = {
    dribbbleData: PropTypes.array
}

export default Dribbble;