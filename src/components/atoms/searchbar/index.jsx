import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function SearchBar({ placeholder, value, onChange, submit }) {
  const [search, setSearch] = useState(value);

  return (
    <div className={styles.container} data-testid="searchbar">
      <form onSubmit={submit}>
        <input
          data-testid="search"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" className={styles.button} data-testid="button">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  submit: PropTypes.func,
};
