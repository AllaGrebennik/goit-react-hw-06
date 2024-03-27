import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
    const dispatch = useDispatch();
    const onChangeValue = (e) => dispatch(changeFilter(e.target.value));
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                type="text"
                onChange={onChangeValue}
            />
        </div>
    );
};

export default SearchBox;