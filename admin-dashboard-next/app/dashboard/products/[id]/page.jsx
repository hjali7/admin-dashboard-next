import styles from '@/ui/products/singleProduct/singleproduct.module.css';
import Image from 'next/image';

export default function SingleProductPage() {
  return (
     <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={'/assets/noproduct.jpg'} alt='productAvatar' width={200} height={200}/>
                </div>
                Jhon Deo
            </div>
            <div className={styles.formContainer}>
                <form >
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" id="title" placeholder='smart watch'/>
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="number" name="price" id="price" placeholder='10$'/>
                    </div>
                    <div>
                        <label htmlFor="stock">Stock:</label>
                        <input type="number" name="stock" id="stock" placeholder='12'/>
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input type="text" maxLength={13} id='color' name='color' placeholder='rose gold'/>
                    </div>
                    <div>
                        <label htmlFor="size">size</label>
                        <input name="size" id="size" placeholder='5.6 inch'/>
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <select name="category" id="category" required>
                            <option value="general">Choose a Category</option>
                            <option value="electronic">Electronic</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="monitor">Monitor</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="desc" rows={10}></textarea>
                    </div>
                    <button type="button" className={styles.btn}>create user</button>
                </form>
            </div>
        </div>
  )
}
