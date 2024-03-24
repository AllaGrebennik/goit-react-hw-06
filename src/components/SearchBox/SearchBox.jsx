import css from "./SearchBox.module.css";

const SearchBox = ({value, onSearch}) => {
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;



// export default function Filter({ value, onFilter }) {
//   return (
//     <div>
//       <p className={css.label}>Search by name</p>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onFilter(e.target.value)}
//       />
//     </div>
//   );
// }
