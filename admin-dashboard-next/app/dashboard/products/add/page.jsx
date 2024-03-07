import styles from '@/ui/products/addProducts/addProducts.module.css';

export default function page() {
  return (
    <div className={styles.container}>
        <div>
            <form action=""  className={styles.forms}>
                <div className={styles.topForm}>
                    <div className={styles.rtForm}>
                        <input type="text" name="" id="" placeholder='Title'/>
                        <input type="text" name="" id="" placeholder='Price'/>
                        <input type="text" name="" id="" placeholder='Color'/>
                    </div>
                    <div className={styles.ltForm}>
                        <select name="" id="">
                            <option>Choose a Category</option>
                            <option>h2</option>
                            <option>h3</option>
                            <option>h4</option>
                        </select>
                        <input type="number" name="" id=""  placeholder='stock'/>
                        <div>
                            <input type="number" name="" id=""  placeholder='size' aria-label='size' aria-describedby='basic-addon2'/>
                            <div>
                                <select name="" id="" disabled="disabled">cm</select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea rows="14" cols="100" placeholder='desc'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
};
