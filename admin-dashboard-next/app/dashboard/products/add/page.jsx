import styles from '@/ui/products/addProducts/addProducts.module.css';

export default function page() {
  return (
    <div className={styles.container}>
        <div>
            <form action=""  className={styles.forms}>
                <div className={styles.topForm}>
                    <div className={styles.rtForm}>
                        <input type="text" name="title"  placeholder='Title' required/>
                        <input type="number" name="price"  placeholder='Price' required/>
                        <input type="text" name="color"  placeholder='Color' required/>
                    </div>
                    <div className={styles.ltForm}>
                        <select name="category" id="category" required>
                            <option value="general">Choose a Category</option>
                            <option value="electronic">Electronic</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="monitor">Monitor</option>
                        </select>
                        <input type="number" name="stock" id="stock"  placeholder='Stock'/>
                        <div className={styles.lenghtForm}>
                            <input type="number" name="size" id="size"  placeholder='Size' aria-label='size' aria-describedby='basic-addon2'/>
                            <div>
                                <select name="" id="">
                                    <option value="">cm</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomForm}>
                    <textarea placeholder='Desc' name='desc' id='desc'></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
};
