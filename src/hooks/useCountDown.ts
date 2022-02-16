export function useCountDown() {
  const countDown = ref(0);

  const countStart = (count: number) => {
    if (unref(countDown) !== 0) {
      return;
    }

    countDown.value = count;

    const timer = setInterval(() => {
      console.info('ICE-[ COUNT ] >>>', countDown.value);
      if (unref(countDown) === 0) {
        clearInterval(timer);
      } else {
        countDown.value--;
      }
    }, 1000);
  };

  return { countDown, countStart };
}
