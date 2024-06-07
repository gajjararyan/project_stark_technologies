import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Launch Your IT Career <br className="sm:block hidden" /> in the USA.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      For international students looking to start their IT careers in the USA, 
      Stark Technologies is your dedicated partner. 
      We offer comprehensive services to support your journey.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
