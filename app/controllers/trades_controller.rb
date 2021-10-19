class TradesController < ApplicationController
  def index
    @trades = Trade.all.order(id: :desc)
  end
end
