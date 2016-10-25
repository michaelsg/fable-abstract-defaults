namespace fable_abstract_defaults
open Fable.Core

[<AbstractClass>]
type AbstractClassWithDefaults () =

    abstract MethodWithDefault : unit -> unit
    default x.MethodWithDefault () = ()

    abstract MustImplement: unit -> unit

    member x.CallMethodWithDefault () =
        x.MethodWithDefault()

type ConcreteClass () =
    inherit AbstractClassWithDefaults()

    override x.MustImplement () = ()

    override x.MethodWithDefault () = ()





