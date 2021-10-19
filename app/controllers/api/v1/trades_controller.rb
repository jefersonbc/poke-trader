module Api
    module V1
        class TradesController < ApplicationController
            def index
                trades = Trade.all
                render json: TradeSerializer.new(trades).serialized_json
            end
        end
    end
end