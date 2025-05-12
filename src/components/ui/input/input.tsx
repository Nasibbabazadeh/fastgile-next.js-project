import styles from './input.module.css';

interface InputProps extends React.ComponentProps<"input"> { }


export default function Input({ ...restProps }: InputProps) {
  return <input {...restProps} className={styles.input} />
}