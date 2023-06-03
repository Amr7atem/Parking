<div>
  {isShown ? (
    <button className="" onClick={handleClick}>
      Cancel
    </button>
  ) : (
    <button className="" onClick={handleClick}>
      Book Now
    </button>
  )}

  {/* 👇️ show elements on click */}
  {isShown && (
    <div>
      <h2>Some content here</h2>
    </div>
  )}

  {/* 👇️ show component on click */}
  {isShown && (
    <Datepicker
      className="w-366px"
      controls={["datetime"]}
      select="range"
      value={myValue}
      onChange={onChange}
    />
  )}
</div>;
{
  slots ? slots.map((slot) => <Slot slot={slot} key={slot.id} />) : "";
}
