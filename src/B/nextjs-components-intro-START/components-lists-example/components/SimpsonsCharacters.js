// components/SimpsonsCharacters.js

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

export default function SimpsonsCharacters() {
    return <>
        <h1>We have {SIMPSON_CHARACTERS.length} Simpsons Characters</h1>
        <ul>
            {
                SIMPSON_CHARACTERS.map((character, index) => 
                    <li key={index}>{character}</li>
                )
            }
        </ul>
    </>
}