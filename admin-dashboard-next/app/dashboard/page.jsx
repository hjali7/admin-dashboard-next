import {Card , Chart , RightBar , Transactions} from './index.js';
import styles from "@/ui/dashboard/dashboard.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.rSide}>
        <RightBar  title={'Available Now'} icon={"🔥"} txt={"How to use the new version of the admin dashboard?"} para={"Takes 4 minutes to learns"} iconBtn={<MdPlayCircleFilled />} btnTxt={"watch"}/>
        <RightBar  title={'Coming Soon'} icon={"🚀"} txt={"New server actions are available,partial pre-rendering is coming up!"} para={"Boost your productivity"} iconBtn={<MdReadMore />} btnTxt={"learn"}/>
      </div>
    </div>
  );
};
