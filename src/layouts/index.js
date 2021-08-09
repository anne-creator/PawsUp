// 公共的部分
import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Hello</h1>
      {/* FIXME: 这个children是谁的children */}
      {props.children}
    </div>
  );
}
export default BasicLayout;
