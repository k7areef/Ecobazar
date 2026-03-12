/**
 * @typedef {Object} props
 * @prop {string} title
 */

function useChangeTitle({ title }) {
    document.title = title;
    return null;
}

export default useChangeTitle;