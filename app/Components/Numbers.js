import React from "react";
import { Col, Row } from "react-bootstrap";
// import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineEmojiPeople, MdWork } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import styles from  "../styles/Home.module.scss";
const Numbers = () => {
  return (
    <>
    
    <div className={styles.Numbers} >
      <section className={`${styles.text_center_f } flex-column flex-md-row`} >
        <Col sm={12} md={2}>
          <div className={styles.column_items} >
            <MdOutlineEmojiPeople className={styles.Icon_item} />
            <h1 style={{fontSize : '22px'}}>عضو</h1>
            <h1 style={{fontSize : '22px'}}>1112</h1>
          </div>
        </Col>
        <Col sm={12} md={2} style={{alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display:"flex",
            
          }}>
          <div className={styles.column_items}>
            <RiPagesLine className={styles.Icon_item} />
            <h1 style={{fontSize : '22px'}}>صفحة</h1>
            <h1 style={{fontSize : '22px'}}>548</h1>
          </div>
        </Col>

        <Col sm={12} md={2} style={{alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display:"flex"
          }}>
          <div className={styles.column_items}>
            <FcAdvertising className={styles.Icon_item} />
            <h1 style={{fontSize : '22px'}}>اعلان</h1>
            <h1 style={{fontSize : '22px'}}>298</h1>
          </div>
        </Col>

        <Col sm={12} md={2} style={{alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display:"flex"
          }}>
          <div className={styles.column_items}>
            <MdWork className={styles.Icon_item} />
            <h1 style={{fontSize : '22px'}}>وظيفة</h1>
            <h1 style={{fontSize : '22px'}}>16</h1>
          </div>
        </Col>

        <Col sm={12} md={2} style={{alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display:"flex"
          }}>
          <div className={styles.column_items}>
            <IoIosPeople className={styles.Icon_item} />
            <h1 style={{fontSize : '22px'}}>زائر</h1>
            <h1 style={{fontSize : '22px'}}>365</h1>
          </div>
        </Col>
      </section>
     
    </div></>
  );
};

export default Numbers;
