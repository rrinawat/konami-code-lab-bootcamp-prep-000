describe('index', () => {
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function triggerKeyDown(which) {
    const keyboardEvent = document.createEvent("KeyboardEvent")

    keyboardEvent.initKeyboardEvent(
      'keydown',
      true,
      true,
      window,
      which,
      which,
      0,
      null,
      null
    )

    document.body.dispatchEvent(keyboardEvent)
