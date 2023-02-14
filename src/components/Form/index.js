export default function Form({ onAddActivity }) {
  function handleActivity(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <h2>Add new Activity:</h2>

        <label htmlFor="activityName">
          Name:
          <input type="text" name="name" id="activityName" />
        </label>
        <br></br>

        <label htmlFor="checkbox">Good-weather activity:</label>
        <input type="checkbox" id="checkbox"></input>
        <br></br>
        <button type="submit" value="submit" onClick={handleActivity}>
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
