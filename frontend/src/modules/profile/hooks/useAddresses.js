import { useEffect, useState } from "react";
import { addressApi } from "../api/addressApi";

export function useAddresses() {
  const [addresses, setAddresses] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [actionError, setActionError] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  async function reload() {
    const result = await addressApi.list();
    if (result.error) setLoadError(result.error);
    else setAddresses(result.data);
  }

  useEffect(() => {
    reload();
  }, []);

  async function runAction(action) {
    setActionError("");
    setIsBusy(true);
    const result = await action();
    if (result.error) setActionError(result.error);
    else await reload();
    setIsBusy(false);
    return result;
  }

  function add(values) {
    return runAction(() => addressApi.create(values));
  }

  function update(addressId, values) {
    return runAction(() => addressApi.update(addressId, values));
  }

  function remove(addressId) {
    return runAction(() => addressApi.remove(addressId));
  }

  function makeDefault(addressId) {
    return runAction(() => addressApi.makeDefault(addressId));
  }

  return {
    addresses,
    loadError,
    actionError,
    isBusy,
    add,
    update,
    remove,
    makeDefault,
  };
}
