const shadow = (val: number, color = '#000') => ({
  elevation: val,
  shadowColor: color,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 3,
});

export {shadow};
