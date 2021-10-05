import Synonyms from "./Synonyms";

export default function Meaning (props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (def, index) {
          return (
            <div key={index}>
              <p>
                {def.definition}
                <br />
                <em>{def.example}</em>
              </p>
              <Synonyms synonyms={def} />
            </div>
          );
        })}
      </div>
    );
}