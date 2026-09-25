const SIMPSON_CHARACTERS = [
  "Homer Simpson",
  "Bart Simpson",
  "Marge Simpson",
  "Mr. Burns",
  "Lisa Simpson",
  "Apu Nahasapeemapetilon",
  "Sideshow Bob",
  "Milhouse Van Houten",
  "Ned Flanders",
]

import styles from '../styles/SimpsonsCharacters.module.scss';

export default function SimpsonsCharacters() {
  return <ul className={styles.list}>
    {SIMPSON_CHARACTERS.map((characterName, index)=> {
      return <li
            key={index}
            className={`${styles['list-item']} ${styles.spacing}`}
          >{characterName}</li>
    })}
  </ul>
}
